import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TreeNode } from 'primeng/primeng';

@Injectable()
export class NodeService {

    constructor(private http: Http) {}

    files =  {
        'data':
        [
            {
                'label': 'Documents',
                'data': 'Documents Folder',
                'expandedIcon': 'fa-folder-open',
                'collapsedIcon': 'fa-folder',
                'children': [{
                        'label': 'Work',
                        'data': 'Work Folder',
                        'expandedIcon': 'fa-folder-open',
                        'collapsedIcon': 'fa-folder',
                        'children': [{'label': 'Expenses.doc', 'icon': 'fa-file-word-o', 'data': 'Expenses Document'}, {'label': 'Resume.doc', 'icon': 'fa-file-word-o', 'data': 'Resume Document'}]
                    },
                    {
                        'label': 'Home',
                        'data': 'Home Folder',
                        'expandedIcon': 'fa-folder-open',
                        'collapsedIcon': 'fa-folder',
                        'children': [{'label': 'Invoices.txt', 'icon': 'fa-file-word-o', 'data': 'Invoices for this month'}]
                    }]
            },
            {
                'label': 'Pictures',
                'data': 'Pictures Folder',
                'expandedIcon': 'fa-folder-open',
                'collapsedIcon': 'fa-folder',
                'children': [
                    {'label': 'barcelona.jpg', 'icon': 'fa-file-image-o', 'data': 'Barcelona Photo'},
                    {'label': 'logo.jpg', 'icon': 'fa-file-image-o', 'data': 'PrimeFaces Logo'},
                    {'label': 'primeui.png', 'icon': 'fa-file-image-o', 'data': 'PrimeUI Logo'}]
            },
            {
                'label': 'Movies',
                'data': 'Movies Folder',
                'expandedIcon': 'fa-folder-open',
                'collapsedIcon': 'fa-folder',
                'children': [{
                        'label': 'Al Pacino',
                        'data': 'Pacino Movies',
                        'children': [{'label': 'Scarface', 'icon': 'fa-file-video-o', 'data': 'Scarface Movie'}, {'label': 'Serpico', 'icon': 'fa-file-video-o', 'data': 'Serpico Movie'}]
                    },
                    {
                        'label': 'Robert De Niro',
                        'data': 'De Niro Movies',
                        'children': [{'label': 'Goodfellas', 'icon': 'fa-file-video-o', 'data': 'Goodfellas Movie'}, {'label': 'Untouchables', 'icon': 'fa-file-video-o', 'data': 'Untouchables Movie'}]
                    }]
            }
        ]
    };

    getFiles() {
        return this.files.data;
        /*
        return this.http.get('showcase/resources/data/files.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
        */
    }

    getLazyFiles() {
      return this.files.data;
      /*
        return this.http.get('showcase/resources/data/files-lazy.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
      */
    }

    getFilesystem() {
      return this.files.data;
      /*
        return this.http.get('showcase/resources/data/filesystem.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
      */
    }

    getLazyFilesystem() {
      const lazyFiles = {
            'data':
            [
                {
                    'label': 'Lazy Node 0',
                    'data': 'Node 0',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                    'leaf': false
                },
                {
                    'label': 'Lazy Node 1',
                    'data': 'Node 1',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                    'leaf': false
                },
                {
                    'label': 'Lazy Node 1',
                    'data': 'Node 2',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                    'leaf': false
                }
            ]
        };
        return lazyFiles.data;
      /*
        return this.http.get('showcase/resources/data/filesystem-lazy.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
      */
    }
}
