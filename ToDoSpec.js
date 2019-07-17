describe('Testing the todo functionality', () => {
   it("checkbox checked correctly", () => {
    document.body.innerHTML = 
    `<ul id="task-list">
        <li class="unchecked">
          <input type="checkbox" class="checkbox">
          <label>Pay Bills</label>
          <button class="delete">Delete</button>
        </li>
        <li class="unchecked">
          <input type="checkbox" class="checkbox">
          <label>Go Shopping</label>
          <button class="delete">Delete</button>
        </li>
      </ul>`;
      const checkbox = document.querySelectorAll('.checkbox');
      const list = document.querySelectorAll('.unchecked');
      checkbox[0].click();
      expect(list[0].classList.value).toBe('unchecked');

   })

})