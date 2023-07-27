<template>
  <div ref="container">
    <video ref="video" loop muted crossOrigin="anonymous" playsinline style="display:none">
      <source src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/video/kinect.webm">
      <!-- <source src="../assets/video/kinect.webm"> -->

      <source src="
https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/video/kinect.mp4">
      <!-- <source src="../assets/video/kinect.mp4"> -->
    </video>
  </div>
</template>

<script setup>
import * as THREE from 'three';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import BackgroundAnimation from '../js/BackgroundAnimation'
const container = ref(null);
const video = ref(null);
let scene, camera, renderer;
let geometry, mesh, material;
let mouse, center;

const init = () => {
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 0, 500);

  scene = new THREE.Scene();
  center = new THREE.Vector3();
  center.z = - 1000;

  const texture = new THREE.VideoTexture(video.value);
  texture.minFilter = THREE.NearestFilter;

  const width = 640, height = 480;
  const nearClipping = 850, farClipping = 4000;

  geometry = new THREE.BufferGeometry();

  const vertices = new Float32Array(width * height * 3);

  for (let i = 0, j = 0, l = vertices.length; i < l; i += 3, j++) {
    vertices[i] = j % width;
    vertices[i + 1] = Math.floor(j / width);
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  let vertexShader = `
uniform sampler2D map;
uniform float width;
uniform float height;
uniform float nearClipping, farClipping;
uniform float pointSize;
uniform float zOffset;

varying vec2 vUv;

const float XtoZ = 1.11146; // tan( 1.0144686 / 2.0 ) * 2.0;
const float YtoZ = 0.83359; // tan( 0.7898090 / 2.0 ) * 2.0;

void main() {
    vUv = vec2( position.x / width, position.y / height );
    vec4 color = texture2D( map, vUv );
    float depth = ( color.r + color.g + color.b ) / 3.0;
    // Projection code by @kcmic
    float z = ( 1.0 - depth ) * (farClipping - nearClipping) + nearClipping;
    vec4 pos = vec4(
        ( position.x / width - 0.5 ) * z * XtoZ,
        ( position.y / height - 0.5 ) * z * YtoZ,
        - z + zOffset,
        1.0);
    gl_PointSize = pointSize;
    gl_Position = projectionMatrix * modelViewMatrix * pos;
}
`;

  let fragmentShader = `
uniform sampler2D map;
varying vec2 vUv;

void main() {
    vec4 color = texture2D( map, vUv );
    gl_FragColor = vec4( color.r, color.g, color.b, 0.2 );
}
`;

  material = new THREE.ShaderMaterial({
    uniforms: {
      'map': { value: texture },
      'width': { value: width },
      'height': { value: height },
      'nearClipping': { value: nearClipping },
      'farClipping': { value: farClipping },
      'pointSize': { value: 2 },
      'zOffset': { value: 1000 }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    blending: THREE.AdditiveBlending,
    depthTest: false, depthWrite: false,
    transparent: true
  });

  mesh = new THREE.Points(geometry, material);
  scene.add(mesh);

  video.value.play();

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.useLegacyLights = false;
  renderer.setClearColor('#37393b');
  container.value.appendChild(renderer.domElement);

  mouse = new THREE.Vector3(0, 0, 1);

  document.addEventListener('mousemove', onDocumentMouseMove);
  window.addEventListener('resize', onWindowResize);
};

const animate = () => {
  requestAnimationFrame(animate);
  render();
};

const render = () => {
  // camera.position.x += (mouse.x - camera.position.x) * 0.05;
  // camera.position.y += (- mouse.y - camera.position.y) * 0.05;

  // console.log(camera.position.x + '-'+ camera.position.y);

  camera.lookAt(center);

  renderer.render(scene, camera);
};

const onDocumentMouseMove = (event) => {
  mouse.x = (event.clientX - window.innerWidth / 2) * 8;
  mouse.y = (event.clientY - window.innerHeight / 2) * 8;
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const onScroll = () => {
  const scoll = new BackgroundAnimation(0, 300)
  window.addEventListener('scroll', () => {
    camera.position.x = scoll.getScrollFraction() * 5000
    camera.position.y = scoll.getScrollFraction() * 5000

  })
}
onMounted(() => {
  init();
  animate();
  onScroll()
});

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onDocumentMouseMove);
  window.removeEventListener('resize', onWindowResize);
});
</script>