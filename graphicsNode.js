class GraphicsNode{
    constructor(mesh, material, transform, webGL) {
        this.mesh = mesh;
        this.material = material;
        this.transform = transform;
        this.webGL = webGL;
    }

    draw() {
        indexLen = this.mesh.indices().length;
        this.material.applyMat();
        this.webGL.drawElements(this.webGL.TRIANGLES, indexLen, this.webGL.UNSIGNED_BYTE, 0);
    }

    transform(newTransform) {
        mat4.translate(this.transform, this.transform, newTransform);
    }
}