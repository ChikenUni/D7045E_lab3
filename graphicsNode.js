class GraphicsNode{
    constructor(mesh, material, transform, webGL) {
        this.mesh = mesh;
        this.material = material;
        this.transform = transform;
        this.webGL = webGL;
    }

    draw() {
        let indexLen = this.mesh.getIndices().length;
        this.material.applyMat(this.transform);
        this.webGL.drawElements(this.webGL.TRIANGLES, indexLen, this.webGL.UNSIGNED_BYTE, 0);
    }

    update(transformVector) {
        mat4.translate(this.transform, this.transform, transformVector);
    }
}