import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/config/config';
import { fields } from './fields';
import {buttonGroups,addingTypes,updatingTypes,gettingTypes } from './adminButtons';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  activeContent: string = '';
  apiEndpoint: string = '';
  fields = [{}];
  buttonGroups = buttonGroups;
  addingTypes = addingTypes;
  updatingTypes = updatingTypes;
  gettingTypes = gettingTypes;

  constructor() {}

  ngOnInit(): void {}
  activeComponent: string = '';

  
  showComponent(component: string) {
    // set api endpoint
    switch (component) {
      case 'getRoadmaps':
      case 'addRoadmap':
      case 'updateRoadmap':
        this.apiEndpoint = ApiUrl.roadmaps;
        break;
      case 'getMilestones':
      case 'addMilestone':
      case 'updateMilestone':
        this.apiEndpoint = ApiUrl.milestones;
        break;
      case 'getQuestions':
      case 'addQuestion':
      case 'updateQuestion':
        this.apiEndpoint = ApiUrl.questions;
        break;
      case 'getQuizes':
      case 'updateQuiz':
        this.apiEndpoint = ApiUrl.quiz;
        break;
      case 'getUsers':
      case 'updateUser':
        this.apiEndpoint = ApiUrl.user;
        break;
      case 'addAdmin':
        this.apiEndpoint = ApiUrl.signup;
        break;
      default:
        this.apiEndpoint = '';
    }
    
    // set fields
    switch (component) {
      case 'addRoadmap':
      case 'updateRoadmap':
        this.fields = fields.roadmap;
        break;
      case 'addMilestone':
      case 'updateMilestone':
        this.fields = fields.milestone;
        break;
      case 'addQuestion':
      case 'updateQuestion':
        this.fields = fields.question;
        break;
      case 'addAdmin':
      case 'updateAdmin':
        this.fields = fields.admin;
        break;
      case 'updateQuiz':
        this.fields = fields.quiz;
        break;
      case 'updateUser':
        this.fields = fields.user;
        break;
      default:
        this.fields = [];
    }
    this.activeContent = component;
    this.activeComponent = component;

  }

 
  selectedRowData: any = null;  
  handleUpdateAdminRequest(rowData: any) {
    this.selectedRowData = rowData;
  }
  isContentActive(content: string): boolean {
    return this.activeContent === content;
  }

  
}
