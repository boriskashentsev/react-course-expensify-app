import moment from 'moment'
import filterReducer from '../../reducers/filters'

test ('should setup default filter value', () => {
    const state = filterReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test ('should set sortBy to amount',() => {
    const state = filterReducer(undefined, {type: 'SORT_BY', sortBy: 'amount'})
    expect(state.sortBy).toBe('amount')
})

test ('should set sortBy to date',() => {
    const currentState = {
        text:'',
        startDate: undefined,
        endDAte: undefined,
        sortBy: 'amount'
    }
    const state = filterReducer(currentState, {type: 'SORT_BY', sortBy: 'date'})
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'boop'
    const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text: text})
    expect(state.text).toBe(text)
})

test ('should set startDate filter', () => {
    const state = filterReducer(undefined, {
        type: 'SET_START_DATE',
        startDate: moment(0).valueOf()
    })
    expect(state.startDate).toBe(moment(0).valueOf())
})

test ('should set endDate filter', () => {
    const state = filterReducer(undefined, {
        type: 'SET_END_DATE',
        endDate: moment(0).valueOf()
    })
    expect(state.endDate).toBe(moment(0).valueOf())
})