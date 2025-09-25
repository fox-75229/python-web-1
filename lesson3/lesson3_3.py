import tools

def main():
    try:
        data = tools.download_youbike_data()
        areas = tools.get_area(data)
        print("目前可以查詢的區域:\n")
        for area in areas:
            print(area,end=" ")
        print("\n")
        selected = input("請選擇一個區域:")
        sites_of_area = tools.get_sites_of_area(data,selected)
        print(sites_of_area)

    except Exception as e:
        print("發生錯誤\n{e}")
    
   

if __name__ == "__main__":
    main()




