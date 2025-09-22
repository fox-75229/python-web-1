# lesson2課程介紹

## 主要課程重點
- 如何定義python的function
- function的參數(paramater)和預設的參數值(default value)
- 如何呼叫function
- 如何使用引數值呼叫(position arguments),引數名稱呼叫(argument labels)

## 詳細課程內容

### 1. 函數基礎概念

#### 什麼是函數？
函數是一段具有特定功能的程式碼區塊，可以重複使用。就像數學中的函數一樣，給定輸入，產生輸出。

#### 為什麼使用函數？
- **程式碼重用**：避免重複寫相同的程式碼
- **模組化**：將複雜問題分解成小塊
- **易於維護**：修改功能時只需修改一個地方
- **提高可讀性**：讓程式碼更清晰易懂

### 2. 函數的定義與呼叫

#### 基本語法
```python
# 定義一個簡單的函數
def greet():
    """這是一個問候函數"""
    print("哈囉！歡迎來到Python世界！")

# 呼叫函數
greet()  # 輸出：哈囉！歡迎來到Python世界！
```

#### 帶參數的函數
```python
# 定義帶有參數的函數
def greet_person(name):
    """問候特定的人"""
    print(f"哈囉，{name}！很高興認識你！")

# 呼叫函數並傳入參數
greet_person("小明")  # 輸出：哈囉，小明！很高興認識你！
greet_person("小華")  # 輸出：哈囉，小華！很高興認識你！
```

### 3. 函數參數詳解

#### 位置參數 (Positional Arguments)
```python
def calculate_rectangle_area(length, width):
    """計算長方形面積"""
    area = length * width
    return area

# 使用位置參數呼叫
area1 = calculate_rectangle_area(5, 3)  # length=5, width=3
print(f"長方形面積：{area1}")  # 輸出：長方形面積：15
```

#### 關鍵字參數 (Keyword Arguments)
```python
# 使用關鍵字參數呼叫
area2 = calculate_rectangle_area(width=4, length=6)  # 順序可以不同
print(f"長方形面積：{area2}")  # 輸出：長方形面積：24
```

#### 預設參數值 (Default Values)
```python
def introduce_person(name, age=18, city="台北"):
    """介紹一個人，年齡和城市有預設值"""
    print(f"我叫{name}，今年{age}歲，住在{city}")

# 不同的呼叫方式
introduce_person("小明")                    # 使用預設值
introduce_person("小華", 25)               # 只指定年齡
introduce_person("小李", 30, "高雄")        # 全部指定
introduce_person("小王", city="台中")       # 跳過age，指定city
```

### 4. 函數回傳值

#### 基本回傳
```python
def add_numbers(a, b):
    """加法運算函數"""
    result = a + b
    return result

# 呼叫並接收回傳值
sum_result = add_numbers(10, 20)
print(f"10 + 20 = {sum_result}")  # 輸出：10 + 20 = 30
```

#### 回傳多個值
```python
def calculate_circle(radius):
    """計算圓形的周長和面積"""
    import math
    circumference = 2 * math.pi * radius
    area = math.pi * radius ** 2
    return circumference, area  # 回傳多個值

# 接收多個回傳值
perimeter, circle_area = calculate_circle(5)
print(f"半徑5的圓形：周長={perimeter:.2f}, 面積={circle_area:.2f}")
```

### 5. 實際應用範例

#### 範例1：溫度轉換器
```python
def celsius_to_fahrenheit(celsius):
    """攝氏溫度轉華氏溫度"""
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_to_celsius(fahrenheit):
    """華氏溫度轉攝氏溫度"""
    celsius = (fahrenheit - 32) * 5/9
    return celsius

# 使用範例
temp_c = 25
temp_f = celsius_to_fahrenheit(temp_c)
print(f"{temp_c}°C = {temp_f}°F")

temp_f = 77
temp_c = fahrenheit_to_celsius(temp_f)
print(f"{temp_f}°F = {temp_c:.1f}°C")
```

#### 範例2：學生成績處理
```python
def calculate_grade(scores):
    """計算學生成績的平均、最高、最低分"""
    if not scores:  # 檢查是否為空列表
        return 0, 0, 0
    
    average = sum(scores) / len(scores)
    highest = max(scores)
    lowest = min(scores)
    
    return average, highest, lowest

def grade_level(score):
    """根據分數判定等級"""
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# 使用範例
student_scores = [85, 92, 78, 96, 88]
avg, high, low = calculate_grade(student_scores)

print(f"學生成績統計：")
print(f"平均分數：{avg:.1f}")
print(f"最高分數：{high}")
print(f"最低分數：{low}")
print(f"平均成績等級：{grade_level(avg)}")
```

### 6. 常見錯誤與注意事項

#### 錯誤1：忘記return
```python
# 錯誤範例
def multiply_wrong(a, b):
    result = a * b
    # 忘記return，函數會回傳None

# 正確範例
def multiply_correct(a, b):
    result = a * b
    return result
```

#### 錯誤2：預設參數使用可變物件
```python
# 危險的預設參數使用方式
def add_item_wrong(item, my_list=[]):  # 不要這樣做
    my_list.append(item)
    return my_list

# 安全的方式
def add_item_correct(item, my_list=None):
    if my_list is None:
        my_list = []
    my_list.append(item)
    return my_list
```

### 7. 練習題目

1. **基礎練習**：寫一個函數計算兩個數字的最大公約數
2. **進階練習**：寫一個函數判斷一個數字是否為質數
3. **應用練習**：寫一個函數處理購物車，計算總金額和折扣

### 8. 課程總結

本課程涵蓋了Python函數的核心概念：
- 函數定義與呼叫的基本語法
- 參數傳遞的各種方式
- 回傳值的使用
- 實際應用場景

掌握這些概念後，你就能寫出更加模組化、易維護的Python程式碼！