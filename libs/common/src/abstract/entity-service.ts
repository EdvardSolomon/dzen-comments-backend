import { Repository } from 'typeorm';

export abstract class EntityService<Entity> {
	protected abstract _repository: Repository<Entity>;

	get queryBuilder() {
		return this._repository.createQueryBuilder();
	}

	get repository() {
		return this._repository;
	}
}
