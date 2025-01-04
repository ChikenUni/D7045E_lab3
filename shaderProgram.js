class ShaderProgram {
    constructor(vertexShader, fragmentShader, webGL) {
        this.vertexShader = vertexShader;
        this.fragmentShader = fragmentShader;
        this.webGL = webGL;

        this.program = webGL.createProgram();
        console.log(this.vertexShader);
        this.webGL.attachShader(this.program, this.vertexShader.getShader());
        this.webGL.attachShader(this.program, this.fragmentShader.getShader());
        this.webGL.linkProgram(this.program);

        if ( ! this.webGL.getProgramParameter( this.program, this.webGL.LINK_STATUS) ) {
            throw new Error("Link error in program:  " + this.webGL.getProgramInfoLog(this.program));
         }
    }

    activate() {
        this.webGL.useProgram(this.program);
    }

    getProgram() {
        return this.program;
    }
}