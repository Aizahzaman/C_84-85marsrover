canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

bg_img_array=["https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631230503683E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630990503659E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630430503603E02_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630080405105E01_DXXX.jpg"];
number=Math.floor(Math.random()*4);



background_img=bg_img_array[number];
rover_img="rover.png";

rover_x=10;
rover_y=10;

function load(){
    bg_img=new Image();
    bg_img.onload=fix_dimension_of_bg;
    bg_img.src=background_img;

    rvr_img= new Image();
    rvr_img.onload=fix_dimension_of_rvr;
    rvr_img.src=rover_img;
}
function fix_dimension_of_bg(){
ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function fix_dimension_of_rvr(){
ctx.drawImage(rvr_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", buttons_pressed);

function buttons_pressed(e){
    var buttoncode=e.keyCode;
    console.log(buttoncode);
    if (buttoncode=="38"){
        up();
    }
    if (buttoncode=="40"){
        down();
    }
    if (buttoncode=="37"){
        left();
    }
    if (buttoncode=="39"){
        right();
    }    
    
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        fix_dimension_of_bg();
        fix_dimension_of_rvr();
    }
}
function down(){
    if(rover_y<=400){
        rover_y=rover_y+10;
        fix_dimension_of_bg();
        fix_dimension_of_rvr();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        fix_dimension_of_bg();
        fix_dimension_of_rvr();
    }
}
function right(){
    if(rover_x<=900){
        rover_x=rover_x+10;
        fix_dimension_of_bg();
        fix_dimension_of_rvr();
    }
}