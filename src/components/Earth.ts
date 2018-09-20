import * as THREE from 'three'

export function createEarth(texture) {
    const geometry = new THREE.SphereGeometry(300, 24, 32)
    const material = new THREE.MeshPhongMaterial({ map: texture })
    const sphere = new THREE.Mesh(geometry, material)
    sphere.position.z = -5
    return sphere
}