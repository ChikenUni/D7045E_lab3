class Shader {
    constructor(shaderSource, shaderType, webGL) {
        if (shaderType == webGL.VERTEX_SHADER) {
            this.shaderTypeNum = 0;
        } else {
            this.shaderTypeNum = 1;
        }
        console.log(shaderSource);

        this.shader = webGL.createShader(shaderType);
        webGL.shaderSource(this.shader, shaderSource);
        webGL.compileShader(this.shader);

        if ( ! webGL.getShaderParameter(this.shader, webGL.COMPILE_STATUS) ) {
            throw new Error("Error in shader:  " + webGL.getShaderInfoLog(this.shader));
        }
    }

    getShader() {
        return this.shader;
    }

    getType() {
        return this.shaderTypeNum;
    }
}