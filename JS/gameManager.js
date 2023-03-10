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
        getInterface.innerHTML = '<img src= "img/avatar-player/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p>Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
        // yoooo!!
    },
    setPreFight: function() {

        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find An Enemy!!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()" >Generate Enemy</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        //Create Enemy

        
    }
}