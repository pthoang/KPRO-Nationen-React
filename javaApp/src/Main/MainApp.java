
package Main;

import java.io.IOException;

import controllers.ViewController;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;

public class MainApp extends Application {
	
	private Stage primaryStage;
	private BorderPane rootLayout;
	
	private ViewController viewController;

	
	@Override
	public void start(Stage primaryStage) {
		this.primaryStage = primaryStage;
		this.primaryStage.setTitle("Nationen - Landbruksmakt");
		
		initRootLayout();
				
		ViewController viewController = new ViewController();
		viewController.setRootLayout(rootLayout);
		viewController.setMainApp(this);
		
		viewController.showStartMenu();

	}
	
	/**
	 * Initializes the root layout
	 * @param args
	 */
	public void initRootLayout() {
		try {
			// Load root layout from fxml file.
			FXMLLoader loader = new FXMLLoader();
			loader.setLocation(MainApp.class.getResource("../view/RootLayout.fxml"));
			rootLayout = (BorderPane) loader.load();
			
			// Show the scene containing the root layout.
			Scene scene = new Scene(rootLayout);
			primaryStage.setScene(scene);
			primaryStage.show();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public Stage getStage() {
		return this.primaryStage;
	}
		
	public static void main(String[] args) {
		launch(args);
	}

}
