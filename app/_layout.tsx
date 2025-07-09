import { 
  useState,     // Hook for managing component state
  useEffect     // Hook for performing side effects in function components
} from 'react'; // Import React hooks for state and side effects
import {
  SafeAreaView,     // A container that ensures content is rendered within the safe area boundaries of a device
  Text,             // Component for displaying text
  View,             // A container for grouping other components
  TouchableOpacity, // A button-like component that responds to touch events
  StyleSheet,       // Utility for creating styles for components
} from 'react-native'; // Import React Native components for UI



// Define the layout of calculator buttons
const buttons = [

  ['7', '8', '9', '/'], // First row of buttons
  ['4', '5', '6', '*'], // Second row of buttons
  ['1', '2', '3', '-'], // Third row of buttons
  ['0', '=', 'C', '+'], // Fourth row of buttons

];

const App = () => {
  // State to store the current input
  const [input, setInput] = useState('');
  // State to store the calculated result
  const [result, setResult] = useState('');

  // Effect to calculate the result whenever the input changes
  useEffect(() => {
    try {
      if (input) {
        // Evaluate the expression and update the result
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } else {
        // Clear the result if input is empty
        setResult('');
      }
    } catch (e) {
      // Handle invalid expressions gracefully
      setResult('');
    }
  }, [input]); // Dependency array ensures this runs when `input` changes

  // Function to handle button presses
  const handlePress = (btn) => {
    if (btn === 'C') {
      // Clear input and result when 'C' is pressed
      setInput('');
      setResult('');
    } else if (btn === '=') {
      // Do nothing since the result is~ calculated automatically
    } else if (btn === '+/-') {
      // Toggle the sign of the input
      if (input.startsWith('-')) setInput(input.substring(1));
      else setInput('-' + input);
    } else {
      // Append the button value to the input
      setInput((prev) => prev + btn);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Display the input and result */}
      <View style={styles.resultContainer}>
        <Text style={{ color: "white", fontSize: 40, fontStyle:'italic', justifyContent:'center', textAlign: 'center', fontWeight: "bold", marginTop: 9, marginBottom: 50 }}>
          Calculator Pro
        </Text>
        <Text style={styles.inputText}>{input + "  "}</Text> {/* Show the current input */}
        <Text style={styles.resultText}>{result + " "}</Text> {/* Show the calculated result */}
      </View>

      {/* Render the calculator buttons */}
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[
                  styles.button,

                  btn === 'C' ? { backgroundColor: 'maroon' } : null, // darkcoral color for 'C' button
                  btn === '/' ? { backgroundColor: 'teal'  } : null, // teal color for '/' button
                  btn === '+' ? { backgroundColor: 'teal'  } : null, // teal color for '+' button
                  btn === '-' ? { backgroundColor: 'teal'  } : null, // teal color for '-' button
                  btn === '*' ? { backgroundColor: 'teal'  } : null, // teal color for '*' button
                  btn === '=' ? { backgroundColor: 'darkgreen' } : null, // green color for '=' button
                  



                ]}
                onPress={() => handlePress(btn)} // Handle button press
              >
                <Text style={[styles.buttonText, btn === '=' && { fontSize: 29 }]}>
                  {btn} {/* Display the button label */}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

// Define styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    backgroundColor: '#000', // Black background
    justifyContent: 'space-between', // Space out elements vertically
  },
  resultContainer: {
    padding: 50, // Add padding around the result area
    alignItems: 'flex-end', // Align text to the right
  },
  inputText: {
    fontSize: 36, // Large font for input
    color: '#AFAFAF', // Light gray color
  },
  resultText: {
    fontSize: 40, // Larger font for result
    color: '#fff', // White color
    marginTop: 10, // Add spacing above the result
  },
  buttonsContainer: {
    padding: 10, // Add padding around the buttons
    marginBottom: 10, // Add margin at the bottom
  },
  row: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'space-between', // Space out buttons evenly
    marginVertical: 6, // Add vertical spacing between rows
  },
  button: {
    backgroundColor: '#1c1c1c', // Dark gray background for buttons
    flex: 1, // Buttons take equal space
    alignItems: 'center', // Center button text horizontally
    justifyContent: 'center', // Center button text vertically
    margin: 5, // Add spacing between buttons
    height: 70, // Set button height
    borderRadius: 35, // Make buttons circular
  },
 
  buttonText: {
    fontSize: 24, // Default font size for button text
    color: '#fff', // White text color
  },
});

export default App; // Export the App component as the default export
