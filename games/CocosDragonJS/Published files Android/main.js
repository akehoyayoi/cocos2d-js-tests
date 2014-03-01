// Autogenerated main.js file

require("jsb.js");

require("Bomb.js");
require("Coin.js");
require("Dragon.js");
require("EndCoin.js");
require("Explosion.js");
require("GameScene.js");
require("Level.js");
require("MainMenuScene.js");


function main()
{
	cc.FileUtils.getInstance().loadFilenameLookup("fileLookup.plist");
	var director = cc.Director.getInstance();
    var scene = cc.BuilderReader.loadAsScene("MainMenuScene");
    var runningScene = director.getRunningScene();
    if (runningScene === null) director.runScene(scene);
    else director.runScene(scene);
}
main();