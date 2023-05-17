class CreateWalletcryptos < ActiveRecord::Migration[6.1]
  def change
    create_table :walletcryptos do |t|
      t.belongs_to :wallet, null: false, foreign_key: true
      t.belongs_to :crypto, null: false, foreign_key: true

      t.timestamps
    end
  end
end
