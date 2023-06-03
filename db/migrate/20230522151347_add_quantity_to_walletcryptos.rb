class AddQuantityToWalletcryptos < ActiveRecord::Migration[6.1]
  def change
    add_column :walletcryptos, :quantity, :integer
  end
end
