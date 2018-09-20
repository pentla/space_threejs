import * as THREE from 'three'
import { createEarth } from './components/Earth'

window.addEventListener('DOMContentLoaded', () =>{
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(800, 600)
    document.body.appendChild(renderer.domElement)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(45, 800/600, 1, 10000)
    camera.position.set(0, 0, 1000)

    const loader = new THREE.TextureLoader()
    let earth;
    loader.load('/assets/earth.png', texture => {
        earth = createEarth(texture)
        scene.add(earth)
    })

    const light = new THREE.DirectionalLight(0xffffff, 2)
    light.position.set(100, 100, 100)
    scene.add(light)

    const tick = (): void => {
        requestAnimationFrame(tick)

        if (earth) {
            earth.rotation.y += 0.005
        }

        renderer.render(scene, camera)
    }
    tick()
})