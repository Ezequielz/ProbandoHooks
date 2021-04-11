import React from 'react';
import { mount, shallow } from "enzyme"
import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from '../../fixtures/demoTodo';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow( <TodoApp /> )

    Storage.prototype.setItem = jest.fn( () => {} )

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()

    });

    test('debe de agregar un TODO', () => {

        const wrapper = mount( <TodoApp /> )

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] )
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] )
        });

        expect( wrapper.find('small').text().trim() ).toBe('( 2 )')
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2)
        
    })
    
    test('debe de eliminar un todo', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] )
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id )
        expect( wrapper.find('small').text().trim() ).toBe('( 0 )')
        
    })
    
    
})
