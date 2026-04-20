import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnimalState } from './animal.model';

/**
 * ✅ Feature Key (must match provideStore)
 * provideStore({ animals: animalReducer })
 */
export const selectAnimalState =
  createFeatureSelector<AnimalState>('animals');

/**
 * ✅ Get all animals
 */
export const selectAnimals = createSelector(
  selectAnimalState,
  (state) => state.animals
);

/**
 * ✅ Loading state
 */
export const selectAnimalLoading = createSelector(
  selectAnimalState,
  (state) => state.loading
);

/**
 * ✅ Total animals count
 */
export const selectAnimalCount = createSelector(
  selectAnimals,
  (animals) => animals.length
);

/**
 * ✅ Filter: Only cows
 */
export const selectCows = createSelector(
  selectAnimals,
  (animals) => animals.filter(a => a.type === 'cow')
);

/**
 * ✅ Filter: Only buffalo
 */
export const selectBuffalo = createSelector(
  selectAnimals,
  (animals) => animals.filter(a => a.type === 'buffalo')
);

/**
 * ✅ Total milk production (VERY IMPORTANT for chart)
 */
export const selectTotalMilk = createSelector(
  selectAnimals,
  (animals) =>
    animals.reduce((total, a) => total + (a.milkProduction || 0), 0)
);

/**
 * ✅ Pie Chart Data (animal distribution)
 */
export const selectAnimalDistribution = createSelector(
  selectAnimals,
  (animals) => {
    const result: any = {};

    animals.forEach(a => {
      result[a.type] = (result[a.type] || 0) + 1;
    });

    return result;
  }
);

/**
 * ✅ Line Chart Data (milk production list)
 */
export const selectMilkProductionList = createSelector(
  selectAnimals,
  (animals) => animals.map(a => a.milkProduction)
);

/**
 * ✅ Get single animal by ID (dynamic selector)
 */
export const selectAnimalById = (id: string) =>
  createSelector(
    selectAnimals,
    (animals) => animals.find(a => a._id === id)
  );