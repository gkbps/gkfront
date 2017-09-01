// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message, TreeNode, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'ptreeTable',
  templateUrl: './ptreeTable.html',
  styleUrls: ['./ptreeTable.scss'],
})

export class PTreeTable implements OnInit {

  msgs: Message[];

  files1: TreeNode[];

  files2: TreeNode[];

  files3: TreeNode[];

  files4: TreeNode[];

  files5: TreeNode[];

  files6: TreeNode[];

  lazyFiles: TreeNode[];

  selectedFile: TreeNode;

  selectedFile2: TreeNode;

  selectedFiles: TreeNode[];

  selectedFiles2: TreeNode[];

  items: MenuItem[];

  files = {
      'data':
      [
          {
              'data': {
                  'name': 'Documents',
                  'size': '75kb',
                  'type': 'Folder',
              },
              'children': [
                  {
                      'data': {
                          'name': 'Work',
                          'size': '55kb',
                          'type': 'Folder',
                      },
                      'children': [
                          {
                              'data': {
                                  'name': 'Expenses.doc',
                                  'size': '30kb',
                                  'type': 'Document',
                              },
                          },
                          {
                              'data': {
                                  'name': 'Resume.doc',
                                  'size': '25kb',
                                  'type': 'Resume',
                              },
                          },
                      ],
                  },
                  {
                      'data': {
                          'name': 'Home',
                          'size': '20kb',
                          'type': 'Folder',
                      },
                      'children': [
                          {
                              'data': {
                                  'name': 'Invoices',
                                  'size': '20kb',
                                  'type': 'Text',
                              },
                          },
                      ],
                  },
              ],
          },
          {
              'data': {
                  'name': 'Pictures',
                  'size': '150kb',
                  'type': 'Folder',
              },
              'children': [
                  {
                      'data': {
                          'name': 'barcelona.jpg',
                          'size': '90kb',
                          'type': 'Picture',
                      },
                  },
                  {
                      'data': {
                          'name': 'primeui.png',
                          'size': '30kb',
                          'type': 'Picture',
                      },
                  },
                  {
                      'data': {
                          'name': 'optimus.jpg',
                          'size': '30kb',
                          'type': 'Picture',
                      },
                  },
              ],
          },
      ],
  };

  constructor(
  ) { }

  ngOnInit() {
    this.files1 = this.files.data.slice(0);
    this.files2 = JSON.parse(JSON.stringify(this.files.data));
    this.files3 = JSON.parse(JSON.stringify(this.files.data));
    this.files4 = JSON.parse(JSON.stringify(this.files.data));
    this.files5 = JSON.parse(JSON.stringify(this.files.data));
    this.files6 = JSON.parse(JSON.stringify(this.files.data));
    this.lazyFiles = JSON.parse(JSON.stringify(this.files.data));
    /*
    this.files1 = <TreeNode[]>Object.assign({}, this.files.data);
    this.files2 = <TreeNode[]>Object.assign({}, this.files.data);
    this.files3 = <TreeNode[]>Object.assign({}, this.files.data);
    this.files4 = <TreeNode[]>Object.assign({}, this.files.data);
    this.files5 = <TreeNode[]>Object.assign({}, this.files.data);
    this.files6 = <TreeNode[]>Object.assign({}, this.files.data);
    this.lazyFiles = <TreeNode[]>Object.assign({}, this.files.data);
    */
  }

  nodeSelect(event) {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
  }

  nodeUnselect(event) {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
  }

  nodeExpand(event) {
      if(event.node) {
        event.node.children = JSON.parse(JSON.stringify(this.files.data));
        /*
          //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
          this.nodeService.getLazyFilesystem().then(nodes => event.node.children = nodes);
        */
      }
  }

  viewNode(node: TreeNode) {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: node.data.name });
  }

  deleteNode(node: TreeNode) {
      node.parent.children = node.parent.children.filter( n => n.data !== node.data);
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Node Deleted', detail: node.data.name });
  }

}
