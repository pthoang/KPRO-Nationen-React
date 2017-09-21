package controllers;

import Main.MainApp;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import model.Candidate;

public class AddCandidateController extends SuperController {

	@FXML
	private TextField nameField;
	@FXML
	private Button saveCandidateButton;
	@FXML
	private TextArea descriptionField;
	
	
	public AddCandidateController() {
		super();
	}
	
	
	@FXML
	private void saveCandidate() {
		if (isInputValid()) {
			String name = nameField.getText();
			String description = descriptionField.getText();
			
			// TODO: automatically save it to this years list
			
			Candidate candidate = new Candidate(name, null, description);
			
			super.mainApp.addCandidate(candidate);
		}
	}
	
	
	/*
	 * Verify the input
	 */
	private boolean isInputValid() {
		return true;
	}
	
}
