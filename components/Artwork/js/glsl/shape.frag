#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
void main(){
    vec2 coord=3.*gl_FragCoord.xy/u_resolution;
    for(int n=1;n<50;n++){
        float i=float(n);
        coord+=vec2(.7/i*sin(i*coord.y+u_time+.3*i)+.8,.4/i*sin(coord.x+u_time+.3*i)+1.6);
    }
    //coord *= vec2(0.7 / sin(coord.y + u_time + 0.3) + 0.8, 0.4 / sin(coord.x + u_time + 0.3)+1.6);
    vec3 color=vec3(.9*sin(coord.x+u_time)+.5,.2*sin(coord.y+u_time)+.5,.1*sin(coord.x+coord.y+u_time)+.5);
    gl_FragColor=vec4(color,1.);
}
