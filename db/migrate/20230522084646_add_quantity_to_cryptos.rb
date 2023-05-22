class AddQuantityToCryptos < ActiveRecord::Migration[6.1]
  def change
    add_column :cryptos, :quantity, :integer
  end
end
