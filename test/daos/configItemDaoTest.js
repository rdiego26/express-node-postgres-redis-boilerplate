const path = require('path');
const assert = require('chai').assert;
const dao = require(path.resolve('src/daos/configItemDao'));

describe('Config Item DAO', () => {

	it('should not create when send invalid data', async() => {
		const invalidData = {
			key: null,
			value: 'AA'
		};

		try {
			await dao.create(invalidData);
		} catch (e) {
			console.log(`e=${e}`);
			assert.isNotNull(e);
		}

	});

});

