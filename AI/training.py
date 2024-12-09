import pandas as pd

# Đọc file CSV (thay 'input.csv' bằng đường dẫn tới file của bạn)
input_file = 'tripadvisor_hotel_reviews.csv'
data = pd.read_csv(input_file)

# Kiểm tra nếu file có đủ 2 cột 'review' và 'rating'
if 'Review' in data.columns and 'Rating' in data.columns:
    # Gán nhãn positive hoặc negative dựa trên rating
    data['Label'] = data['Rating'].apply(lambda x: 'positive' if x >= 3 else 'negative')

    # Xuất file mới gồm 3 cột review, rating, và label
    output_file = 'output.csv'
    data[['Review', 'Rating', 'Label']].to_csv(output_file, index=False)
    print(f"File đã được lưu thành công tại {output_file}")
else:
    print("File CSV không chứa đủ 2 cột 'Review' và 'Rating'.")
