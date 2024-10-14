import Error "mo:base/Error";
import Text "mo:base/Text";

import Float "mo:base/Float";
import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Iter "mo:base/Iter";

actor Calculator {
    private stable var history : [(Float, Float, Text, Float)] = [];

    // Addition function
    public func add(x : Float, y : Float) : async Float {
        let result = x + y;
        history := Array.append(history, [(x, y, "+", result)]);
        return result;
    };

    // Subtraction function
    public func subtract(x : Float, y : Float) : async Float {
        let result = x - y;
        history := Array.append(history, [(x, y, "-", result)]);
        return result;
    };

    // Multiplication function
    public func multiply(x : Float, y : Float) : async Float {
        let result = x * y;
        history := Array.append(history, [(x, y, "*", result)]);
        return result;
    };

    // Division function
    public func divide(x : Float, y : Float) : async ?Float {
        if (y == 0) {
            Debug.print("Error: Division by zero");
            return null;
        } else {
            let result = x / y;
            history := Array.append(history, [(x, y, "/", result)]);
            return ?result;
        };
    };

    // Get calculation history
    public query func getHistory() : async [(Float, Float, Text, Float)] {
        return history;
    };

    // Clear history
    public func clearHistory() : async () {
        history := [];
    };
}
