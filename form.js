class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        var input = createInput('Name');
        var button = createButton('Play');
        var greeting = createElement('h3');

        title.html("car Racing")
        title.position(130,0);
        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount +=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hello "+ name)
            greeting.position(130,160);
            
        })

    }
}