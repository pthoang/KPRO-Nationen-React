package controllers;

import Main.MainApp;
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import model.Candidate;

public class ListCandidatesController {
	
	@FXML
	private TableView<Candidate> candidateTable;
	@FXML
	private TableColumn,
	@FXML
	private TableColumn<Candidate, Integer> rangeColumn;
	@FXML
	private TableColumn<Candidate, String> firstNameColumn;
	@FXML
	private TableColumn<Candidate, String> lastNameColumn;
	
	private MainApp mainApp;
	private ViewController viewController;
	
	public void setMainApp(MainApp mainApp) {
		this.mainApp = mainApp;
		
		candidateTable.setItems(mainApp.getCandidates());
	}
	
	public void setViewController(ViewController viewController) {
		this.viewController = viewController;
	}
	
	
	@FXML
	private void initialize() {
		rangeColumn.setCellValueFactory(cellData -> cellData.getValue().rangeProperty().asObject());
		firstNameColumn.setCellValueFactory(cellData -> cellData.getValue().firstNameProperty());
		lastNameColumn.setCellValueFactory(cellData -> cellData.getValue().lastNameProperty());
	}

}
