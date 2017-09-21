package controllers;

import Main.MainApp;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import model.Candidate;

public class ListCandidatesController {
	
	@FXML
	private TableView<Candidate> candidateTable;
	@FXML
	private TableColumn<Candidate, String> firstNameColumn;
	@FXML
	private TableColumn<Candidate, String> lastNameColumn;
	
	private MainApp mainApp;
	private ViewController viewController;
	
	public void setMainApp(MainApp mainApp) {
		this.mainApp = mainApp;
		
		ObservableList<Candidate> candidates = mainApp.getCandidates();
		System.out.println("Candidates: " + candidates);
		candidateTable.setItems(candidates);
	}
	
	public void setViewController(ViewController viewController) {
		this.viewController = viewController;
	}
	
	
	@FXML
	private void initialize() {
		firstNameColumn.setCellValueFactory(cellData -> cellData.getValue().firstNameProperty());
		lastNameColumn.setCellValueFactory(cellData -> cellData.getValue().lastNameProperty());
	}

}
