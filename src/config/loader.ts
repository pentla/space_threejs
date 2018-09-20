import * as THREE from 'three'
import { createEarth } from '../components/Earth';

export function renderTexture() {
    const loader = new THREE.TextureLoader()
    loader.load('/assets/earth.png', texture => createEarth(texture))
 }