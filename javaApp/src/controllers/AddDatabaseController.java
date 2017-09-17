package controllers;

import java.awt.Desktop;

import Main.MainApp;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.stage.FileChooser;

public class AddDatabaseController {
	
	@FXML
	private Button createOutputButton;
	@FXML
	private FileChooser fileChooserButton;
	@FXML
	private TextField loadedFileNameField;
	
	FileChooser fileChooser = new FileChooser();
	
	
	private MainApp mainApp;
	private ViewController viewController;
	
	public void setMainApp(MainApp mainApp) {
		this.mainApp = mainApp;
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
		private Desktop desktop = Desktop.getDesktop();
		fileChooser.showOpenDialog(stage);
		
	}
	

}
