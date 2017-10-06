var C999_Common_Rope_CurrentStage = 0;
var C999_Common_Rope_HasLooseRope = 0;

// Chapter Common - Rope Load
function C999_Common_Rope_Load() {
	
	// Load the scene parameters
	LeaveIcon = "Leave";
	LoadInteractions();
	
	// Set the correct starting stage
	if (PlayerHasLockedInventory("Rope") == true) C999_Common_Rope_CurrentStage = 10;
	else C999_Common_Rope_CurrentStage = 0;
	
	// If the player has a loose rope
	C999_Common_Rope_HasLooseRope = PlayerHasInventory("Rope");
	
}

// Chapter Common - Rope Run, we draw the regular player image if the item is on
function C999_Common_Rope_Run() {
	BuildInteraction(C999_Common_Rope_CurrentStage);
	if (PlayerHasLockedInventory("Rope") && (OveridenIntroImage == "")) DrawPlayerImage(150, 240);
}

// Chapter Common - Rope Click, allow regular interactions and clicking on another item
function C999_Common_Rope_Click() {
	OveridenIntroImage = "";
	ClickInteraction(C999_Common_Rope_CurrentStage);
	InventoryClick(GetClickedInventory(), LeaveChapter, LeaveScreen);
}

// Chapter Common - Show the item image
function C999_Common_Rope_ShowImage() {
	OveridenIntroImage = "Rope.jpg";
}