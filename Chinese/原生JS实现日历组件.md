<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-04 22:33:35
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-21 22:44:59
 * @Description: 原生 JS 实现日历组件
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\Chinese\原生JS实现日历组件.md
-->

#### 原生 JS 实现日历组件？

下面是一个基于原生 JavaScript 实现的日历组件，包含月份选择和日期选择两种模式，可以用于在网页中选择日期。

HTML：

```
<div class="calendar"></div>
```

CSS：

```
.calendar {
  width: 250px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #eee;
}

.month-year {
  font-weight: bold;
}

.days {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}

.days th,
.days td {
  padding: 5px;
  border: 1px solid #ccc;
}

.days td:hover {
  background-color: #f5f5f5;
}

.days td.selected {
  background-color: #0074d9;
  color: #fff;
}
```

JavaScript：

```
// 创建日历对象
function Calendar (elem) {
  // 日历容器
  this.elem = elem;
  // 当前日期
  this.date = new Date();
  // 初始化界面
  this.init();
}

// 初始化界面
Calendar.prototype.init = function () {
  // 创建界面元素
  this.createHeader();
  this.createDays();
  // 绑定事件处理函数
  this.bindEvents();
  // 更新界面
  this.update();
};

// 创建头部元素
Calendar.prototype.createHeader = function () {
  // 创建头部元素
  var header = document.createElement('div');
  header.className = 'header';
  // 创建月份选择按钮
  var prevYearBtn = document.createElement('button');
  prevYearBtn.className = 'prev-year';
  prevYearBtn.textContent = '<<';
  header.appendChild(prevYearBtn);
  var prevMonthBtn = document.createElement('button');
  prevMonthBtn.className = 'prev-month';
  prevMonthBtn.textContent = '<';
  header.appendChild(prevMonthBtn);
  var monthYear = document.createElement('div');
  monthYear.className = 'month-year';
  header.appendChild(monthYear);
  var nextMonthBtn = document.createElement('button');
  nextMonthBtn.className = 'next-month';
  nextMonthBtn.textContent = '>';
  header.appendChild(nextMonthBtn);
  var nextYearBtn = document.createElement('button');
  nextYearBtn.className = 'next-year';
  nextYearBtn.textContent = '>>';
  header.appendChild(nextYearBtn);
  // 添加头部元素到日历容器
  this.elem.appendChild(header);
};

// 创建日期元素
Calendar.prototype.createDays = function () {
  // 创建日期表格
  var days = document.createElement('table');
  days.className = 'days';
  // 创建表头
  var header = days.createTHead();
  var row = header.insertRow();
  var cells = [];
  for (var i = 0; i < 7; i++) {
    cells[i] = row.insertCell();
    cells[i].textContent = ['日', '一', '二', '三', '四', '五', '六'][i];
  }
  // 创建表格主体
  var tbody = days.createTBody();
  for (var i = 0; i < 6; i++) {
    row = tbody.insertRow();
    for (var j = 0; j < 7; j++) {
      cells[j] = row.insertCell();
    }
  }
  // 添加日期表格到日历容器
  this.elem.appendChild(days);
};

// 绑定事件处理函数
Calendar.prototype.bindEvents = function () {
  var prevYearBtn = this.elem.querySelector('.prev-year');
  var prevMonthBtn = this.elem.querySelector('.prev-month');
  var nextMonthBtn = this.elem.querySelector('.next-month');
  var nextYearBtn = this.elem.querySelector('.next-year');
  // 上一年按钮
  prevYearBtn.addEventListener('click', function () {
    this.date.setFullYear(this.date.getFullYear() - 1);
    this.update();
  }.bind(this));
  // 上一月按钮
  prevMonthBtn.addEventListener('click', function () {
    this.date.setMonth(this.date.getMonth() - 1);
    this.update();
  }.bind(this));
  // 下一月按钮
  nextMonthBtn.addEventListener('click', function () {
    this.date.setMonth(this.date.getMonth() + 1);
    this.update();
  }.bind(this));
  // 下一年按钮
  nextYearBtn.addEventListener('click', function () {
    this.date.setFullYear(this.date.getFullYear() + 1);
    this.update();
  }.bind(this));
  // 日期单元格
  var cells = this.elem.querySelectorAll('.days td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function () {
      this.date.setDate(parseInt(this.textContent));
      this.update();
    }.bind(this));
  }
};

// 更新界面
Calendar.prototype.update = function () {
  // 更新月份选择按钮的文本
  var monthYear = this.elem.querySelector('.month-year');
  monthYear.textContent = this.date.getFullYear() + '年' + (this.date.getMonth() + 1) + '月';
  // 清除所有日期单元格的类名
  var cells = this.elem.querySelectorAll('.days td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].className = '';
  }
  // 设置当前日期单元格的类名
  var year = this.date.getFullYear();
  var month = this.date.getMonth();
  var date = this.date.getDate();
  var firstDay = new Date(year, month, 1).getDay();
  var lastDate = new Date(year, month + 1, 0).getDate();
  for (var i = 1; i <= lastDate; i++) {
    cells[firstDay + i - 1].textContent = i;
    if (year == this.date.getFullYear() && month == this.date.getMonth() && i == date) {
      cells[firstDay + i - 1].className = 'selected';
    } else {
      cells[firstDay + i - 1].className = 'valid';
    }
  }
};

// 初始化日历
// Calendar.prototype.init = function () {
//   this.createHeader();
//   this.createDays();
//   this.bindEvents();
//   this.update();
// };

// 创建一个日历实例
var calendar = new Calendar(document.querySelector('.calendar'));
// calendar.init();
```
