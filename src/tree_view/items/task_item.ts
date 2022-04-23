import path = require('path');
import { TreeItem, TreeItemCollapsibleState } from 'vscode';
import * as types from '../../types';

export class TaskItem extends TreeItem {
    constructor(
        public task: types.Task,
        public readonly collapsibleState: TreeItemCollapsibleState,
    ) {
        super(task.name, collapsibleState);
        // this.tooltip = 'tooltip';
        var iconName = this.getIcon(task.priority);
        this.iconPath = {
            light: path.join(__filename, '..', '..', '..', '..', 'resources', 'taskItem', iconName),
            dark: path.join(__filename, '..', '..', '..', '..', 'resources', 'taskItem', iconName)
        };
    }

    contextValue = 'taskItem';

    getIcon(priority: types.Priority | null) {
        if (priority === undefined || priority === null) {
            return 'priority-normal.svg';
        }

        return `priority-${priority.priority}.svg`;
    }
}