/*
 * Author: Daisuke Takayama
 */
/// <reference path='../_all.ts' />

module FixedTables {
  export class FixedTableModel {
    private window: Window;
    private tableView: TableView;

    constructor(
      option?: any
      ) {
      if(option !== void 0) {
        this.tableView = TableView.fromData(option);
      } else {
        this.tableView = TableView.fromData({});
      }
    }

    /**
     * Getter Model
    **/
    public getTableViewModel(): TableView {
      return this.tableView;
    }

    public getTableModel(): Table {
      return this.tableView.table;
    }

    public getTheadModel(): Thead {
      return this.tableView.table.thead;
    }

    public getTbodyModel(): Tbody {
      return this.tableView.table.tbody;
    }

    /**
     * Function
    **/
    public chengeMode(bool: boolean) {
      this.tableView.chengeMode(bool);
    }

  }
}
