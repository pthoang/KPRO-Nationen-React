package controllers;

import Main.MainApp;
import javafx.fxml.FXML;
import javafx.scene.control.Button;


public class StartMenuController {
	
	
	@FXML 
	private Button newListButton;
	@FXML
	private Button listCandidatesButton;
	@FXML 
	private Button previousListsButton;
	
	
	private MainApp mainApp;
	
	private ViewController viewController;
	
	public void setMainApp(MainApp mainApp) {
		this.mainApp = mainApp;
	}
	
	public void setViewController(ViewController viewController) {
		this.viewController = viewController;
	}
	
	/**
	 * Initializes the controller class. 
	 * The method is automatically called after the fxml file has been loaded."
	 */
	@FXML
	private void initialize() {
		
	}
	
	@FXML
	private void showNewList() {
		viewController.showNewListView();
	}
	
	@FXML
	private void showPreviousLists() {
		viewController.showPreviousListsView();
	}
	
	@FXML
	private void showListCandidates() {
		viewController.showListCandidatesView();
	}
}
