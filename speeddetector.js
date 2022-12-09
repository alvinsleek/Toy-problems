function detector(inputspeed) {
    let points = 0;

    const maxSpeed = 70;

    if(inputSpeed < maxSpeed){
        console.log('Ok');
        return;
    }

    if(inputspeed > maxSpeed){
    console.log("Points:"+((inputspeed-70)/5));
    }
    const Points = Math.floor((inputSpeed - maxSpeed) / 5);

    if(Points > 12);
    console.log('License suspended.');
}
