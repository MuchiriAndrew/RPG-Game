let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 100, 50);
                break;

                case "Knight":
                    player = new Player(classType, 100, 0, 150, 200);
                    break;
        
                    
                    case "Fire Mage":
                        player = new Player(classType, 80, 0, 50, 200, 50);
                        break;
        
                        
                        case "Frost Mage":
                            player = new Player(classType, 80, 0, 50, 200, 50);
                            break;
        

        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src= "img/avatar-player/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p class = "health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
        // yoooo!!
    },
    setPreFight: function() {

        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find An Enemy!!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Find An Enemy</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        //Create Enemy

        let enemy00 = new Enemy("Huntress", 100, 0, 50, 100);
        let enemy01 = new Enemy("Rogue", 200, 0, 150, 80);
        let enemy02 = new Enemy("Shadow", 100, 0, 50, 100);
        let enemy03 = new Enemy("Viking", 100, 0, 50, 100);

        //stats will be updated!!

        //generate a random number

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
        // console.log(chooseRandomEnemy);

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
        getHeader.innerHTML = '<p>Task: Choose Your Move</p>';

        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()" >Attack!!</a>';

        getEnemy.innerHTML = '<img src= "img/avatar-enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt = " ' + enemy.enemyType + '" class= "img-avatar">   <div><h3>' + enemy.enemyType + '</h3>  <p class= "health-enemy">Health: ' + enemy.health + '</p> <p>Mana: ' + enemy.mana + '</p> <p>Strength: ' + enemy.strength + '</p> <p>Agility: ' + enemy.agility + '</p> <p>Speed: ' + enemy.speed + '</p> </div>';
    }
}