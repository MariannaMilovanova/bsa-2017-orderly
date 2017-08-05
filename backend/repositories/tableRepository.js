require('../db/dbConnect');
const Repository = require('./generalRepository');
const Table = require('../schemas/Table');
let that;

class TableRepository extends Repository {

    constructor() {
        super();
        this.model = Table;
        that = this;
    }

    updateRecord(tableId, record) {
        return that.model.findByIdAndUpdate(
            tableId,
            {'$push': {records: record._id}},
            {'new': true}
        );
    }

    pullRecord(tableId, recordId) {
        return that.model.findByIdAndUpdate(
            tableId,
            {'$pull': {records: recordId}}
        );
    }

    addField(tableId, field) {
        return that.model.findByIdAndUpdate(
            tableId,
            {'$push': {fields: field._id}},
            {'new': true}
        );
    }

    pullField(tableId, fieldId) {
        return that.model.findByIdAndUpdate(
            tableId,
            {'$pull': {fields: fieldId}}
        );
    }

    linkView(tableId, viewId) {
        return that.model.findByIdAndUpdate(
            tableId,
            {'$push': {views: viewId}},
            {'new': true}
        );
    }

    unlinkView(tableId, viewId) {       //remove
        return that.model.findByIdAndUpdate(
            tableId,
            {'$pull': {views: viewId}}
        );
    }

}

module.exports = new TableRepository();

//
// const addRecord = (tableId, record) =>
//   new Record(record).save()
//     .then( recordObj =>
//       Table.findByIdAndUpdate(
//         tableId,
//         {'$push': {'records': recordObj._id}},
//         {'new': true}
//     ))
//
// const deleteRecord = (tableId, recordId) =>
//   Table.findByIdAndUpdate(tableId, {'$pull': {records: recordId}})
//
//
//
//
//
// module.exports = {
//   add,
//   getAll,
//   getById,
//   update,
//   deleteTable,
//   addRecord,
//   deleteRecord
// }