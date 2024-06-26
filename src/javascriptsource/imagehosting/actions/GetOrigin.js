// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * This can be determined what the current hostname (+protocol) is of the page you load this in. Example 'https://testserver.mendixcloud.com'
 * @returns {Promise.<string>}
 */
export async function GetOrigin() {
	// BEGIN USER CODE
	return window.location.origin;
	// END USER CODE
}
