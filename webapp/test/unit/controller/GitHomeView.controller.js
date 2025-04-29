/*global QUnit*/

sap.ui.define([
	"zsharpgitproj/controller/GitHomeView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GitHomeView Controller");

	QUnit.test("I should test the GitHomeView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
