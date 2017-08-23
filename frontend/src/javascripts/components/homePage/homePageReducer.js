import R from 'ramda'


let initialState = {
	teamPopupIsShow: false,
	showMenuforBase: 0,
	teams: [],
	activeModal: ''
}
const baseStore = (state = initialState, action) => {

	switch (action.type) {

		case 'DELETE_BASE_SUCCESS':
			return R.mergeAll([
				R.dissoc('teams', state),
				{
					teams: R.map((team) => {
						let newTeam = R.clone(team);
						newTeam.bases = R.reject(R.propEq('_id', action.deletedBase._id))(newTeam.bases);
						return newTeam;
					})(state.teams)
				}
			]);

		case 'GET_TEAMS_BY_USER_SUCCEEDED':
			return R.merge(state, {teams: action.teams})

		case 'TOGGLE_TEAM_POPUP':
			return R.merge(state, {teamPopupIsShow: action.isShow})

		case 'SET_TEAM_MODAL_ACTIVITY':
			return R.merge(state, {activeModal: action.typeOfActivity})

		case 'GET_BASES_BY_TEAM_SUCCEEDED':
			return R.mergeAll([
				R.dissoc('teams', state),
				{
					teams: R.map((team) => {
						if (team._id === action.payload.teamId) {
							let newObj = R.clone(team);
							newObj.bases = action.payload.bases;
							return newObj;
						} else return team
					})(state.teams)
				}
			]);

		case 'UPDATE_TEAM_SUCCEEDED':
			return R.mergeAll([
				R.dissoc('teams', state),
				{
					teams: R.concat(
						R.reject(R.propEq('_id', action.team._id))(state.teams),
						[action.team ]
					)
				}
			]);

		case 'DELETE_TEAM_SUCCEEDED':
			return R.mergeAll([
				R.dissoc('teams', state),
				{
					teams: R.reject(R.propEq('_id', action.team))(state.teams)
				}
			]);

		case 'ADD_NEW_BASE_TO_TEAM_SUCCEEDED':
			return R.mergeAll([
				R.dissoc('teams', state),
				{
					teams: R.concat(
						R.reject(R.propEq('_id', action.team._id))(state.teams),
						[action.team]
					)
				}

			])

		case 'OPEN_CONTEXT_MENU':
			return Object.assign(
				{},
				state,
				{showMenuforBase: action._id}
			)

		case 'CHANGE_BASE_PARAM_SUCCESS':
			return R.mergeAll([
				R.omit(['teams', 'showMenuforBase'], state),
				{
					teams: R.map((team) => {
						let newObj = R.clone(team);
						newObj.bases = R.map((base) => {
							if (base._id === action.base._id) return action.base
							else base
						})(newObj.bases)
						return newObj;
					})(state.teams)
				},
				{
					showMenuforBase: 0
				}
			]);

		default:
			return state
	}
}

export default baseStore