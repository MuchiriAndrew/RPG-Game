// create a GameManager object

let GameManager = {
    // setGameStart will be the methond that is run during our onclick event(it has two methods inside it since we can only run one method in our onclick event)

    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },

    // resetPlayer is a method that creates our player and takes us to the fight page
    resetPlayer: function(classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 100, 50, 90);
                break;

                case "Knight":
                    player = new Player(classType, 100, 0, 150, 200, 130);
                    break;
        
                    case "Fire Mage":
                        player = new Player(classType, 80, 200, 100, 50, 70);
                        break;
        
                        case "Frost Mage":
                            player = new Player(classType, 80, 200, 100, 50, 70);
                            break;
        }

        //we need to grap the content from the class interface and change it!!
        let getInterface = document.querySelector(".interface");

        //insert content
        getInterface.innerHTML = '<img src= "img/avatar-player/' + classType.toLowerCase() + '.jpg" class="img-avatar">  <div><h3>' + classType + '</h3>  <p class = "health-player">Health: ' + player.health + '</p>  <p>Mana: ' + player.mana + '</p>  <p>Strength: ' + player.strength + '</p>  <p>Agility: ' + player.agility + '</p>  <p>Speed: ' + player.speed + '</p>  </div>';
        // very naiss!!
    },


    //the overall look of the game once we choose the player
    setPreFight: function() {

        //grab sections
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        //insert content
        getHeader.innerHTML = '<p>Task: Find An Enemy!!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Find An Enemy</a>';
        getArena.style.visibility = "visible"; //change the css styling since it is set as hidden in the sylesheet
    },

    // setFight is a method that randomly chooses our enemy in the fight page
    setFight: function() {

        //grab content
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        //Create Enemy

        let enemy00 = new Enemy("Huntress", 100, 0, 50, 100,120);
        let enemy01 = new Enemy("Rogue", 200, 0, 150, 80,100);
        let enemy02 = new Enemy("Shadow", 100, 0, 50, 100,150);
        let enemy03 = new Enemy("Viking", 100, 0, 50, 100,60);

        //generate a random number

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));

        switch (chooseRandomEnemy) {
                case 0:
                enemy = enemy00;
                break;

                case 1:
                enemy = enemy01;
                break;

                case 2:
                enemy = enemy02;
                break;

                case 3:
                enemy = enemy03;
                break;
        }

        //insert new content

        getHeader.innerHTML = '<p>Task: Choose Your Move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()" >Attack!!</a>';

        getEnemy.innerHTML = '<img src= "img/avatar-enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt = " ' + enemy.enemyType + '" class= "img-avatar">   <div><h3>' + enemy.enemyType + '</h3>  <p class= "health-enemy">Health: ' + enemy.health + '</p> <p>Mana: ' + enemy.mana + '</p> <p>Strength: ' + enemy.strength + '</p> <p>Agility: ' + enemy.agility + '</p> <p>Speed: ' + enemy.speed + '</p> </div>';
    }
}