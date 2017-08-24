const router = require('express').Router();
const baseRepository = require('../../repositories/base/baseRepository');
const tableRepository = require('../../repositories/table/tableRepository');
const gridViewRepository = require('../../repositories/view/gridRepositories');
const {defaultTable} = require('../../config/defaultTable');
const {defaultView} = require('../../config/defaultView');

router.get('/', (req, res) => {
    baseRepository.getAll().then((bases) => {
        res.status(200).send(bases);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
    baseRepository.getById(req.params.id).then((base) => {
        res.status(base ? 200 : 400).send(base);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post('/', (req, res) => Promise.all(
    [
        baseRepository.add(req.body),
        tableRepository.add(defaultTable),
        gridViewRepository.add(defaultView),
    ])
    .then(([base, table, view]) => Promise.all([
        baseRepository.addTableToBase(base._id, table._id),
        tableRepository.addView(table._id, view._id, view.type)
    ]))
    .then(([base, table]) => res.status(200).send(base))
    .catch((err) => res.status(500).send(err))
);

router.delete('/:id', (req, res) => {
    baseRepository.remove(req.params.id).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });

});

router.put('/:id', function (req, res) {
    baseRepository.update(req.params.id, req.body).then((result) => {
        res.status(result ? 200 : 400).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.put('/:id/tables/:tableId', (req, res) => {
    baseRepository.addTableToBase(req.params.id, req.params.tableId)
        .then((result) => res.status(result ? 200 : 400).send(result))
        .catch((err) => res.status(500).send(err));
});

module.exports = router;
