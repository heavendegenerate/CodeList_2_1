#pragma strict

var TranslateSpeed = 20;
var RotateSpeed = 1000;

function Start () {

}

function Update () {

}

function OnGUI() {
	GUI.backgroundColor = Color.red;
	if(GUI.Button(Rect(10,10,70,30), "向左旋转")) {
		transform.Rotate(Vector3.up * Time.deltaTime * (-RotateSpeed));
	}
	
	if(GUI.Button(Rect(90,10,70,30), "向前移动")) {
		transform.Translate(Vector3.forward * Time.deltaTime * TranslateSpeed);
	}
	
	if(GUI.Button(Rect(170,10,70,30), "向右旋转")) {
		transform.Rotate(Vector3.up * Time.deltaTime * RotateSpeed);
	}
	
	if(GUI.Button(Rect(90,50,70,30), "向后移动")) {
		transform.Translate(Vector3.forward * Time.deltaTime * (-TranslateSpeed));
	}
	
	if(GUI.Button(Rect(10,50,70,30), "向左移动")) {
		transform.Translate(Vector3.right * Time.deltaTime * (-TranslateSpeed));
	}
	
	if(GUI.Button(Rect(170,50,70,30), "向右移动")) {
		transform.Translate(Vector3.right * Time.deltaTime * TranslateSpeed);
	}
	
	GUI.Label(Rect(250, 10, 200, 30), "模型的位置" + transform.position);
	GUI.Label(Rect(250, 50, 200, 30), "模型的旋转" + transform.rotation);
}