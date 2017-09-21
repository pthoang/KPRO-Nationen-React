package controllers;

import Main.MainApp;
import javafx.fxml.FXML;
import javafx.scene.control.Button;


public class StartMenuController {
	
	@FXML
	private Button addDatabaseButton;
	@FXML 
	private Button addCandidateButton;
	@FXML 
	private Button listCandidatesButton;
	
	
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
	private void addDatabase() {
		viewController.showAddDatabaseView();
	}
	
	@FXML
	private void addCandidate() {
		viewController.showAddCandidateView();
	}
	
	@FXML
	private void listCandidates() {
		viewController.showListCandidatesView();
	}
}
