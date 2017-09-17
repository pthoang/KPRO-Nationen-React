package controllers;

import java.awt.Desktop;

import Main.MainApp;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

public class AddDatabaseController {
	
	@FXML
	private Button createOutputButton;
	@FXML
	private Button fileChooserButton;
	@FXML
	private TextField loadedFileNameField;
	
	FileChooser fileChooser = new FileChooser();
	
	
	private MainApp mainApp;
	private ViewController viewController;
	
	public void setMainApp(MainApp mainApp) {
		this.mainApp = mainApp;
		System.out.println("setMainApp is called");
	}
	
	public void setViewController(ViewController viewController) {
		this.viewController = viewController;
	}
	
	@FXML
	private void createOutput() {
		
	}
	
	/**
	 * Field updates when a file is loaded
	 */
	@FXML
	private void loadedFileNameField() {
		// TODO
		
	}
	
	/**
	 * Loades the selected file
	 */
	@FXML
	private void fileChooser() {
		
		FileChooser fileChooser = new FileChooser();
		Desktop desktop = Desktop.getDesktop();

			
		System.out.println("MainApp: " + mainApp);

		System.out.println("fileChooser: "+ fileChooser);
		
		Stage stage = mainApp.getStage();
		System.out.println("Stage: " + stage);
		fileChooser.showOpenDialog(stage);
		
	}
	

}
