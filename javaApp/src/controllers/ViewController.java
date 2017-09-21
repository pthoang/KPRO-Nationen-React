package controllers;

import java.io.IOException;

import Main.MainApp;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.BorderPane;

public class ViewController {
	
	@FXML
	private BorderPane rootLayout;
	
	private MainApp mainApp;
	
	public void setMainApp(MainApp mainApp) {
		this.mainApp = mainApp;
	}
	
	public void setRootLayout(BorderPane rootLayout) {
		this.rootLayout = rootLayout;
	}
	
	/**
	 * Show the view for start menu.
	 */
	public void showStartMenu() {
		try {
			// Load start screen
			FXMLLoader loader = new FXMLLoader();
			loader.setLocation(MainApp.class.getResource("../view/StartMenu.fxml"));
			AnchorPane startMenuView = (AnchorPane) loader.load();
			
			// Set startscreen in the center of root layout.
			rootLayout.setCenter(startMenuView);
			
			StartMenuController controller = loader.getController();
			controller.setMainApp(mainApp);
			controller.setViewController(this);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	/**
	 * Shows the view for adding database.
	 */
	public void showAddDatabaseView() {
		try {
			FXMLLoader loader = new FXMLLoader();
			loader.setLocation(MainApp.class.getResource("../view/AddDatabaseView.fxml"));
			AnchorPane addDatabaseView = (AnchorPane) loader.load();
		
			rootLayout.setCenter(addDatabaseView);
			
			AddDatabaseController controller = loader.getController();
			controller.setMainApp(mainApp);
			controller.setViewController(this);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Shows the view for adding database.
	 */
	public void showAddCandidateView() {
		try {
			FXMLLoader loader = new FXMLLoader();
			loader.setLocation(MainApp.class.getResource("../view/AddCandidateView.fxml"));
			AnchorPane addCandidateView = (AnchorPane) loader.load();
		
			rootLayout.setCenter(addCandidateView);
			
			AddCandidateController controller = loader.getController();
			controller.setMainApp(mainApp);
			controller.setViewController(this);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Shows the view for listing candidates.
	 */
	public void showListCandidatesView() {
		try {
			FXMLLoader loader = new FXMLLoader();
			loader.setLocation(MainApp.class.getResource("../view/ListCandidatesView.fxml"));
			AnchorPane listCandidatesView = (AnchorPane) loader.load();
		
			rootLayout.setCenter(listCandidatesView);
			
			ListCandidatesController controller = loader.getController();
			controller.setMainApp(mainApp);
			controller.setViewController(this);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
