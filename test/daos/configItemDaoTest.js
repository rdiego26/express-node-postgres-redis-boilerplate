const path = require('path');
const faker = require('faker');
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
			assert.isNotNull(e);
		}

	});

	it('should create when send valid data', async() => {
		const validData = {
			key: faker.lorem.text(),
			value: faker.lorem.text()
		};

		let createdItem = await dao.create(validData);
		assert.isNotNull(createdItem);
		assert.isObject(createdItem);
		assert.ok(createdItem.key === validData.key);
		assert.ok(createdItem.value === validData.value);

	});

});

